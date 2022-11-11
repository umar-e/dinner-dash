import React from "react";
import { Link } from "react-router-dom";
export default function NewItem() {

  function submitHandler(){
    const item = {

    }
    console.log(item);
  }
  return (
    <div className="container text-start">
      <form onSubmit={submitHandler}>
        <div class="mb-1 col-md-6 ">
          <label for="itemName" class="form-label">
            Name
          </label>
          <input required type="text" class="form-control" id="itemName" />
        </div>

        <div class="mb-1 col-md-6">
          <label for="price" class="form-label">
            Price
          </label>
          <input required type="number" class="form-control" id="price" />
        </div>
        <div class="mb-1 col-md-6">
          <label for="category" class="form-label">
            Category
          </label>
          <input required type="text" class="form-control" id="category" />
          <div class="form-text">Separate categories with comma. " , "</div>
        </div>
        <div class="mb-1 col-md-6">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3 col-md-6 text-start">
          <label class="form-label" for="image">
            Image URL
          </label>
          <input type="text" class="form-control" id="image" />
        </div>

        <button type="submit" class="btn btn-primary mb-5 col-md-4" >
          Submit
        </button>
        <div className='w-100 text-start'>
        <Link to={"/admin"} className='btn btn-danger'>Back</Link>
      </div>
      </form>

    </div>

  );
}
