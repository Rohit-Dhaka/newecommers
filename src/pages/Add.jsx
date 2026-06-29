import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData,{headers:{token}});
      if(response.data.success){
        toast.success(response.data.message);
        setName("")
        setDescription("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    // <form onSubmit={onSubmitHandler} className='flex flex-col gap-2 items-start w-full'>
    //   <div>
    //     <p className='mb-2'>Upload Image</p>
    //     <div className='flex gap-2'>
    //       <label htmlFor="image1">
    //         <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
    //         <input onChange={(e)=>setImage1(e.target.files[0])} type="file"  id="image1" hidden />
    //       </label>
    //       <label htmlFor="image2">
    //         <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
    //         <input onChange={(e)=>setImage2(e.target.files[0])} type="file"  id="image2" hidden />
    //       </label>
    //       <label htmlFor="image3">
    //         <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
    //         <input onChange={(e)=>setImage3(e.target.files[0])} type="file"  id="image3" hidden />
    //       </label>
    //       <label htmlFor="image4">
    //         <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
    //         <input onChange={(e)=>setImage4(e.target.files[0])} type="file"  id="image4" hidden />
    //       </label>
    //     </div>
    //   </div>

    //   <div className='w-full'>
    //     <p className='mb-2'>Product name</p>
    //     <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' placeholder='Type here' type="text" required />
    //   </div>

    //   <div className='w-full'>
    //     <p className='mb-2'>Product description</p>
    //     <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' placeholder='Write content here' type="text" id="" required />
    //   </div>

    //   <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8 '>

    //     <div>
    //       <p className='mb-2'>Product category</p>
    //       <select onChange={(e)=>setCategory(e.target.value)}  className='w-full px-3 py-2 '>
    //         <option value="Men">Men</option>
    //         <option value="Women">Women</option>
    //         <option value="Kids">Kids</option>
    //       </select>
    //     </div>

    //     <div>
    //       <p className='mb-2'>Sub category</p>
    //       <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2 '>
    //         <option value="Topwear">Topwear</option>
    //         <option value="Bottomwear">Bottomwear</option>
    //         <option value="Winterwear">Winterwear</option>
    //       </select>
    //     </div>

    //     <div>
    //       <p className='mb-2'>Product Price</p>
    //       <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='25' />
    //     </div>
    //   </div>

    //   <div>
    //     <p className='mb-2'>Product sizes</p>
    //     <div className='flex gap-3'>

    //       <div onClick={()=>setSizes(prev => prev.includes("S")? prev.filter(item => item !== "S"):[...prev,"S"])} >
    //         <p className={`${sizes.includes("S")? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
    //       </div>

    //       <div onClick={()=>setSizes(prev => prev.includes("M")? prev.filter(item => item !== "M"):[...prev,"M"])}>
    //         <p className={`${sizes.includes("M")? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
    //       </div>

    //       <div onClick={()=>setSizes(prev => prev.includes("L")? prev.filter(item => item !== "L"):[...prev, "L"])}>
    //         <p className={`${sizes.includes("L")? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
    //       </div>

    //       <div onClick={()=>setSizes(prev => prev.includes("XL")? prev.filter(item => item !== "XL"):[...prev, "XL"])}>
    //         <p className={`${sizes.includes("XL")? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
    //       </div>

    //       <div onClick={()=>setSizes(prev => prev.includes("XXL")? prev.filter(item => item !== "XXL"):[...prev, "XXL"])}>
    //         <p className={`${sizes.includes("XXL")? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className='flex gap-2 mt-2'>
    //     <input onChange={()=>setBestseller(prev => !prev )} checked={bestseller} type="checkbox"  id="bestseller" />
    //     <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
    //   </div>

    //   <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
    // </form>

<form
  onSubmit={onSubmitHandler}
  className="w-full max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-10 flex flex-col gap-8"
>

  {/* Upload Images */}

  <div>
    <h2 className="text-xl font-bold text-gray-900">
      Upload Product Images
    </h2>

    <p className="text-sm text-gray-500 mt-1 mb-5">
      Upload up to 4 high-quality product images.
    </p>

    <div className="flex flex-wrap gap-5">

      <label
        htmlFor="image1"
        className="cursor-pointer group"
      >
        <img
          className="w-28 h-28 rounded-2xl border-2 border-dashed border-gray-300 object-cover bg-gray-50 p-2 transition-all duration-300 group-hover:border-black group-hover:scale-105"
          src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
          alt=""
        />
        <input
          hidden
          id="image1"
          type="file"
          onChange={(e) => setImage1(e.target.files[0])}
        />
      </label>

      <label
        htmlFor="image2"
        className="cursor-pointer group"
      >
        <img
          className="w-28 h-28 rounded-2xl border-2 border-dashed border-gray-300 object-cover bg-gray-50 p-2 transition-all duration-300 group-hover:border-black group-hover:scale-105"
          src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
          alt=""
        />
        <input
          hidden
          id="image2"
          type="file"
          onChange={(e) => setImage2(e.target.files[0])}
        />
      </label>

      <label
        htmlFor="image3"
        className="cursor-pointer group"
      >
        <img
          className="w-28 h-28 rounded-2xl border-2 border-dashed border-gray-300 object-cover bg-gray-50 p-2 transition-all duration-300 group-hover:border-black group-hover:scale-105"
          src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
          alt=""
        />
        <input
          hidden
          id="image3"
          type="file"
          onChange={(e) => setImage3(e.target.files[0])}
        />
      </label>

      <label
        htmlFor="image4"
        className="cursor-pointer group"
      >
        <img
          className="w-28 h-28 rounded-2xl border-2 border-dashed border-gray-300 object-cover bg-gray-50 p-2 transition-all duration-300 group-hover:border-black group-hover:scale-105"
          src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
          alt=""
        />
        <input
          hidden
          id="image4"
          type="file"
          onChange={(e) => setImage4(e.target.files[0])}
        />
      </label>

    </div>
  </div>

  {/* Product Name */}

  <div className="w-full">
    <label className="block mb-2 text-sm font-semibold text-gray-700">
      Product Name
    </label>

    <input
      type="text"
      required
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter product name..."
      className="w-full rounded-xl border border-gray-300 px-5 py-3 outline-none transition-all duration-300 focus:border-black focus:ring-2 focus:ring-black/10"
    />
  </div>

  {/* Description */}

  <div className="w-full">
    <label className="block mb-2 text-sm font-semibold text-gray-700">
      Product Description
    </label>

    <textarea
      required
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Write a detailed product description..."
      rows="6"
      className="w-full rounded-xl border border-gray-300 px-5 py-3 resize-none outline-none transition-all duration-300 focus:border-black focus:ring-2 focus:ring-black/10"
    />
  </div>



    {/* Category | SubCategory | Price */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

  {/* Category */}
  <div>
    <p className="mb-2 text-sm font-semibold text-gray-700">
      Product Category
    </p>

    <select
      onChange={(e) => setCategory(e.target.value)}
      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-black focus:ring-2 focus:ring-black/10"
    >
      <option value="Men">Men</option>
      <option value="Women">Women</option>
      <option value="Kids">Kids</option>
    </select>
  </div>

  {/* Sub Category */}
  <div>
    <p className="mb-2 text-sm font-semibold text-gray-700">
      Sub Category
    </p>

    <select
      onChange={(e) => setSubCategory(e.target.value)}
      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-black focus:ring-2 focus:ring-black/10"
    >
      <option value="Topwear">Topwear</option>
      <option value="Bottomwear">Bottomwear</option>
      <option value="Winterwear">Winterwear</option>
    </select>
  </div>

  {/* Price */}
  <div>
    <p className="mb-2 text-sm font-semibold text-gray-700">
      Product Price
    </p>

    <input
      type="number"
      placeholder="₹999"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-300 focus:border-black focus:ring-2 focus:ring-black/10"
    />
  </div>

</div>

{/* Sizes */}

<div className="w-full">
  <p className="mb-3 text-sm font-semibold text-gray-700">
    Available Sizes
  </p>

  <div className="flex flex-wrap gap-3">

    <div
      onClick={() =>
        setSizes((prev) =>
          prev.includes("S")
            ? prev.filter((item) => item !== "S")
            : [...prev, "S"]
        )
      }
      className={`cursor-pointer rounded-xl px-5 py-2 font-medium transition-all duration-300 ${
        sizes.includes("S")
          ? "bg-black text-white shadow-lg"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      S
    </div>

    <div
      onClick={() =>
        setSizes((prev) =>
          prev.includes("M")
            ? prev.filter((item) => item !== "M")
            : [...prev, "M"]
        )
      }
      className={`cursor-pointer rounded-xl px-5 py-2 font-medium transition-all duration-300 ${
        sizes.includes("M")
          ? "bg-black text-white shadow-lg"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      M
    </div>

    <div
      onClick={() =>
        setSizes((prev) =>
          prev.includes("L")
            ? prev.filter((item) => item !== "L")
            : [...prev, "L"]
        )
      }
      className={`cursor-pointer rounded-xl px-5 py-2 font-medium transition-all duration-300 ${
        sizes.includes("L")
          ? "bg-black text-white shadow-lg"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      L
    </div>

    <div
      onClick={() =>
        setSizes((prev) =>
          prev.includes("XL")
            ? prev.filter((item) => item !== "XL")
            : [...prev, "XL"]
        )
      }
      className={`cursor-pointer rounded-xl px-5 py-2 font-medium transition-all duration-300 ${
        sizes.includes("XL")
          ? "bg-black text-white shadow-lg"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      XL
    </div>

    <div
      onClick={() =>
        setSizes((prev) =>
          prev.includes("XXL")
            ? prev.filter((item) => item !== "XXL")
            : [...prev, "XXL"]
        )
      }
      className={`cursor-pointer rounded-xl px-5 py-2 font-medium transition-all duration-300 ${
        sizes.includes("XXL")
          ? "bg-black text-white shadow-lg"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      XXL
    </div>

  </div>
</div>

{/* Bestseller */}

<div className="flex items-center gap-3 mt-2">

  <input
    id="bestseller"
    type="checkbox"
    checked={bestseller}
    onChange={() => setBestseller((prev) => !prev)}
    className="w-5 h-5 accent-black cursor-pointer"
  />

  <label
    htmlFor="bestseller"
    className="text-gray-700 font-medium cursor-pointer"
  >
    Add to Bestseller
  </label>

</div>

{/* Button */}

<button
  type="submit"
  className="mt-8 w-full md:w-56 rounded-xl bg-black py-3 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:shadow-xl active:scale-95"
>
  Add Product
</button>

</form>
  )
}

export default Add