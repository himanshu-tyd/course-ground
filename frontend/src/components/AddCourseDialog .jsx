import { useState } from "react";
import { Loader2Icon, X } from "lucide-react";

import { toast } from "sonner";
import useCloudnaryUpload from "../hooks/useUploadImage";
import skeletonImage from "../assets/image.jpg";
import useAddUpload from "../hooks/useAddCourse";

const AddCourseDialog = () => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [data, setData] = useState({
    title: "",
    desc: "",
    imageUrl: "",
    price: "",
  });

  const { loading, uploadImage } = useCloudnaryUpload();
  const { loading: uploadLoading, uploadCours } = useAddUpload();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleSumit = async (e) => {
    e.preventDefault();

    const result = await uploadCours(data);

    if (!result) return;

    setOpen(false);
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];

    const size = parseInt(file.size); //this will return file size in bytes

    if (!file) {
      toast.error("Please select an image");
    }

    // if (size > 300 * 1024) {
    //   return toast.error("image size should be lest than 300kb");
    // }

    const url = await uploadImage(file);

    if (!url) {
      return toast.error("Failed to get url");
    }

    setUrl(url);
    setData({ ...data, imageUrl: url });
  };

  const handleOpen = () => {
    setOpen((pre) => !pre);
  };

  return (
    <div>
      <button
        className="px-2 py-2 text-sm bg-dark border-2 border-dusty text-white rounded-lg "
        onClick={handleOpen}
      >
        Add New Course
      </button>
      <div className={open ? "block" : "hidden"}>
        <div
          className={`w-screen h-screen absolute top-0 left-0 flex-center bg-dark bg-opacity-70 backdrop-blur-sm overflow-hidden transition-all`}
        >
          <form
            onSubmit={handleSumit}
            className="min-w-auto sm:max-w-[600px]  p-4 bg-white rounded-lg"
          >
            <div className="flex items-center justify-between w-full ">
              <div className="w-full">
                <h3
                  className="text-md font-semibold text-black "
                  onClick={handleOpen}
                >
                  Add New Course
                </h3>
                <span className="text-sm text-slate-600">
                  Fill in the course details. Click save when you're done.
                </span>
              </div>
              <div
                onClick={handleOpen}
                className="bg-yellow rounded-full cursor-pointer  p-2 hover:scale-105 active:scale-100  duration-150 border-gray border    "
              >
                <X className="w-4 h-4" />
              </div>
            </div>

            {/* inputs section */}

            <div className="mt-4 flex flex-col gap-4 ">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="title"
                  className="text-black text-sm  font-semibold "
                >
                  Title
                </label>
                <input
                  id="title"
                  required
                  onChange={handleChange}
                  name="title"
                  type="text"
                  placeholder="Enter course name"
                  className="input-style placeholder:text-gray border-gray border-[1px] placeholder:text-sm  "
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="desc"
                  className="text-black text-sm  font-semibold "
                >
                  Description
                </label>
                <textarea
                  required
                  onChange={handleChange}
                  id="desc"
                  name="desc"
                  type="text"
                  placeholder="Enter course description"
                  className="input-style h-[120px] placeholder:text-gray border-gray border-[1px] placeholder:text-sm  "
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="image"
                  className="text-black text-sm  font-semibold "
                >
                  Image
                </label>
                <input
                  required
                  onChange={handleUploadImage}
                  id="image"
                  name="image"
                  type="file"
                  placeholder="upload image"
                  className="input-style placeholder:text-gray border-gray border-[1px] placeholder:text-sm  "
                />
                <div className="w-full h-20 rounded-md bg-slate-100 flex items-center justify-center ">
                  {loading ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    <img
                      src={url == "" ? skeletonImage : url}
                      className="w-full h-full object-cover rounded-md "
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="price"
                  className="text-black text-sm  font-semibold "
                >
                  Price
                </label>
                <input
                  required
                  onChange={handleChange}
                  id="price"
                  name="price"
                  type="number"
                  placeholder="$ Price"
                  className="input-style placeholder:text-gray border-gray border-[1px] placeholder:text-sm  "
                />
              </div>
            </div>

            {/* action buttons */}
            <div className="mt-5 ">
              <div className="flex gap-2 justify-end ">
                <button
                  className="button-click px-4 py-2 text-sm bg-transparent border-2 border-dusty text-dark rounded-lg "
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className=" button-click px-8 py-2 text-sm bg-dark border-2 border-dusty text-white rounded-lg "
                >
                  {uploadLoading ? (
                    <Loader2Icon className="w-auto animate-spin  " />
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourseDialog;
