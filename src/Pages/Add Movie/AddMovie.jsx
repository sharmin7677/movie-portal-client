import React from "react";

const AddMovie = () => {
  const handleAddMovie = (e) => {
    e.preventDefault();
    // const form = e.target;

    const AddMovieInfo = {};
  };

  return (
    <div className="hero min-h-screen bg-[#F4F3F0] p-8 md:p-24">
      <div className="card w-full max-w-4xl mx-auto shadow-2xl bg-base-100">
        <h1 className="text-4xl font-bold text-center mt-8">Add New Movie</h1>
        <p className="text-center mt-4 text-gray-600 px-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>

        <form onSubmit={handleAddMovie} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Movie Poster */}
            <div>
              <label className="label">
                <span className="label-text">Movie Poster</span>
              </label>
              <input
                type="url"
                name="poster"
                className="input input-bordered w-full"
                placeholder="Enter movie poster URL"
              />
            </div>

            {/* Movie Title */}
            <div>
              <label className="label">
                <span className="label-text">Movie Title</span>
              </label>
              <input
                type="text"
                name="title"
                className="input input-bordered w-full"
                placeholder="Enter movie title"
              />
            </div>

            {/* Genre */}
            <div>
              <label className="label">
                <span className="label-text">Genre</span>
              </label>
              <input
                type="text"
                name="genre"
                className="input input-bordered w-full"
                placeholder="Enter movie genre"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="label">
                <span className="label-text">Duration</span>
              </label>
              <input
                type="text"
                name="duration"
                className="input input-bordered w-full"
                placeholder="Enter duration"
              />
            </div>

            {/* Release Year */}
            <div>
              <label className="label">
                <span className="label-text">Release Year</span>
              </label>
              <input
                type="text"
                name="year"
                className="input input-bordered w-full"
                placeholder="Enter release year"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                className="input input-bordered w-full"
                placeholder="Enter rating"
              />
            </div>

            {/* Summary */}
            <div className="md:col-span-2">
              <label className="label">
                <span className="label-text">Summary</span>
              </label>
              <input
                type="text"
                name="summary"
                className="input input-bordered w-full"
                placeholder="Enter movie summary"
              />
            </div>
          </div>

          <div className="mt-6">
            <button type="submit" className="btn w-full bg-[#D70040] hover:bg-[#C41E3A] text-white text-xl">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
