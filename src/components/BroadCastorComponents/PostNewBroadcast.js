import React from 'react';

const PostNewBroadcast = () => {
  return (
    <div className="max-w-md mx-auto mt-10 px-4 py-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Post New Broadcast</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter description"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select category</option>
            <option value="news">News</option>
            <option value="sports">Sports</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="videoURL">
            Video URL
          </label>
          <input
            type="text"
            id="videoURL"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter video URL"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Post Broadcast
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostNewBroadcast;
