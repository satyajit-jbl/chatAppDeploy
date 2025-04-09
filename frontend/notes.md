# Steps To upload an image to Cloudinary
-  Set up Cloudinary Account
- Get your Cloudinary API key, API secret, and Cloud name from your Cloudinary dashboard. and save in .env file
```
CLOUDINARY_CLOUD_NAME=********
CLOUDINARY_API_KEY=********
CLOUDINARY_API_SECRET=****************
```
- Install Required Packages
```
npm install axios
```
- Create a custom instance of Axios, which is a popular HTTP client for making requests in JavaScript
```js
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5001/api",
    withCredentials: true,
});
```

## Functions (Frontend)
- create the following function in useAuthStore.
Some notes:
1. The FileReader API is used to read the image as a base64 string.
2. Base64 encoding allows the image to be sent as a text format, which is useful when sending it to APIs like Cloudinary.
3. The readAsDataURL(file) method reads the selected image file.
4. This will convert the image into a base64-encoded string, which looks like:
data:image/png;base64,iVBORw0KGgoAAAANS...
5. e.target.files[0];
    //files[0]: This refers to the first file in the files list. Since a user can select multiple files, the files list could contain more than one file. The [0] accesses the first file from the list. If only one file is selected, it will be the only item in the list.
    

```js
updateProfile: async (data) =>{
        set({isUpdatingProfile: true});
        try {
            const res = await axiosInstance.put("/auth/update-profile", data);
            set({authUser: res.data})
            toast.success("Profile Updated Successfully")
        } catch (error) {
            console.log("error in update profile", error);
            toast.error(error.response.data.message);
        }finally{
            set({isUpdatingProfile: false})
        }
    }
```
- ProfilePage.jsx

```js
const handleImageUpload = async (e) => {
    const file = e.target.files[0];
   
    if (!file) return; //If no file is selected, exit the function
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image }); //profilePic is declared in auth.controller.js(backend)
    };
  };
  .
  .
  .
                <input
                  type="file" //input type will be file
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}//When the user selects an image from their device, the onChange event triggers this function
                  disabled={isUpdatingProfile} //isUpdatingProfile is true → The input is disabled
                />
  ```

## Functions (Backend)
-auth.controller.js

```js
export const updateProfile = async (req, res)=>{
    try {
        const {profilePic} = req.body;
        const userId = req.user._id;

        if(!profilePic){
            return res.status(400).json({message: "Profile pic is required"});
        }

        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        const updateUser = await User.findByIdAndUpdate(
            userId, //We pass the userId to find the specific user to update.
            {profilePic: uploadResponse.secure_url},
            {new: true}
        );
//The { new: true } option in MongoDB’s findByIdAndUpdate method is used to control the behavior of the query, specifically what it returns after updating a document.
        res.status(200).json(updateUser);

    } catch (error) {
        console.log("error in update profile:", error);
        res.status(500).json({message: "Internal Server Error"});
    }
}
```
