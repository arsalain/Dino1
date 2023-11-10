"use client"
import { useState } from 'react';

const page = () => {
    const [destData, setDestData] = useState({
        name: '',
        coverimage: null,
        urllink:'',
        imagealt:'',
        maintype:'',
        over:[],
        products: [],
        blogs: []
    })
    const handleChange = (e) => {
        setDestData({ ...destData, [e.target.name]: e.target.value });
      };
    const handleFileChange = (e) => {
        // Assuming that you are calling this function with the proper 'name' attribute of the input
        const { name, files } = e.target;
      
        if (files.length > 0) {
          // If there's a file selected, update the trekData state with the new file.
          setDestData(prevState => ({
            ...prevState,
            [name]: files[0] // Store the first selected file.
          }));
        }
      };
      const handleChangeArray = (name, index, value) => {
        setDestData((prev) => {
          const newArray = [...prev[name]];
          newArray[index] = value;
          return { ...prev, [name]: newArray };
        });
      };
      const handleAddArrayItem = (field) => {
        setDestData((prevDestData) => ({
          ...prevDestData,
          [field]: [...prevDestData[field], ''], // Add a new empty string item
        }));
      };
      const handleRemoveArrayItem = (name, index) => {
        setDestData((prev) => {
          const newArray = [...prev[name]];
          newArray.splice(index, 1);
          return { ...prev, [name]: newArray };
        });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
    
        // Append non-array fields to formData
        for (const [key, value] of Object.entries(destData)) {
            if (!['over','products','blogs'].includes(key)) {
              formData.append(key, value);
            }
          }
          destData.blogs.forEach((item, index) => {
            formData.append(`blogs[${index}]`, item.trim());
          });
          
          // Assuming trekData.things is an array
          destData.products.forEach((item, index) => {
            formData.append(`products[${index}]`, item.trim());
          });
          destData.over.forEach((item, index) => {
            formData.append(`over[${index}]`, item.trim());
          });
    for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value , "hey");
      }
    try {
        const response = await fetch('http://localhost:4000/dest/createdest', {
          method: 'POST',
          body: formData,
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);
        alert("Data successfully uploaded");
      } catch (error) {
        console.error('Error submitting form:', error);
        alert("Data upload error");
      }
    };
  return (
    <div>
       <div className="container mx-auto p-4 ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold">Destination Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder=' Enter the name of the destination'
            value={destData.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col px-2 w-1/2">
    <label htmlFor="testimage" className="font-bold">Cover Image:</label>
    <input
      type="file"
      id="coverimage"
      name="coverimage"
      onChange={handleFileChange} // Ensure you have a handler for file changes
      className="p-2 border border-gray-300 rounded"
    />

  </div>
  <input
        type="text"
        placeholder="Image Alt text"
        name="imagealt"
        value={destData.imagealt}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded"
      />
          <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold">Url link</label>
          <input
            type="text"
            id="urllink"
            name="urllink"
            placeholder=' Enter the url of destination'
            value={destData.urllink}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
      <div className="flex flex-col gap-2">
  <label htmlFor="destination" className="font-bold">
    Destination type:
  </label>
  <select
    id="maintype"
    name="maintype"
    value={destData.maintype}
    onChange={handleChange}
    className="p-2 border border-gray-300 rounded"
  >
    <option value=''>Please select a type</option>
    <option value="southindia">South India Trips</option>
    <option value="northindia">North India Trips</option>
    <option value="international">International Trips</option>
  </select>
</div>
      <div className='w-full px-2 py-2'>
  <h3 className="text-center font-semibold">OverView</h3>
  {destData.over.map((item, index) => (
    <div key={index} className="flex flex-row gap-2 items-center">
      <textarea
        value={item}
        placeholder={`Overview Para  ${index + 1}`}
        onChange={(e) => handleChangeArray('over', index, e.target.value)}
        className="p-2 border border-gray-300 rounded w-full"
      />
      <button
        type="button"
        onClick={() => handleRemoveArrayItem('over', index)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Remove
      </button>
    </div>
  ))}
  <button
    type="button"
    onClick={() => handleAddArrayItem('over')}
    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full"
  >
    Add Overview
  </button>
</div>
<div className='w-full px-2 py-2'>
  <h3 className="text-center font-semibold">Products Ids</h3>
  {destData.products.map((item, index) => (
    <div key={index} className="flex flex-row gap-2 items-center">
      <textarea
        value={item}
        placeholder={`Enter Products ids  ${index + 1}`}
        onChange={(e) => handleChangeArray('products', index, e.target.value)}
        className="p-2 border border-gray-300 rounded w-full"
      />
      <button
        type="button"
        onClick={() => handleRemoveArrayItem('products', index)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Remove
      </button>
    </div>
  ))}
  <button
    type="button"
    onClick={() => handleAddArrayItem('products')}
    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full"
  >
    Add Products Ids
  </button>
</div>
<div className='w-full px-2 py-2'>
  <h3 className="text-center font-semibold">Blogs Ids</h3>
  {destData.blogs.map((item, index) => (
    <div key={index} className="flex flex-row gap-2 items-center">
      <textarea
        value={item}
        placeholder={`Enter Blogs ids  ${index + 1}`}
        onChange={(e) => handleChangeArray('blogs', index, e.target.value)}
        className="p-2 border border-gray-300 rounded w-full"
      />
      <button
        type="button"
        onClick={() => handleRemoveArrayItem('blogs', index)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Remove
      </button>
    </div>
  ))}
  <button
    type="button"
    onClick={() => handleAddArrayItem('blogs')}
    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full"
  >
    Add Blogs Ids
  </button>
</div>
<div className='flex justify-center'>
        <button 
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Create Destination
        </button>
        </div>
      </form>
    </div>
    </div>
    
  )
}

export default page
