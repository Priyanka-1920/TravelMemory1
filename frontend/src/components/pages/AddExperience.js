import React, { useState } from "react";
import { baseUrl } from "../../url";
import axios from "axios";

export default function AddExperience() {
  const [loading, setLoading] = useState(false);

  const [formdata, setFormdata] = useState({
    tripName: "",
    startDateOfJourney: "",
    endDateOfJourney: "",
    nameOfHotels: "",
    placesVisited: "",
    totalCost: 0,
    experience: "",
    image: "",
    tripType: "",
    featured: false,
    shortDescription: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      console.log(formdata);

      // FIXED API URL
      const response = await axios.post(baseUrl, formdata);

      console.log("SUCCESS:", response.data);

      alert("Trip Added Successfully!");

      setFormdata({
        tripName: "",
        startDateOfJourney: "",
        endDateOfJourney: "",
        nameOfHotels: "",
        placesVisited: "",
        totalCost: 0,
        experience: "",
        image: "",
        tripType: "",
        featured: false,
        shortDescription: "",
      });
    } catch (err) {
      console.log("API ERROR:", err);
      alert("Failed to add trip");
    } finally {
      setLoading(false);
    }
  };

  if (loading === true) {
    return <div>Loading...</div>;
  } else {
    return (
      <div style={{ margin: "2%" }}>
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="tripName" className="form-label">
              Trip Name
            </label>

            <input
              type="text"
              className="form-control"
              id="tripName"
              placeholder="Add your Trip Name"
              value={formdata.tripName}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  tripName: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tripDate" className="form-label">
              Trip Date
            </label>

            <div className="row">
              <div className="col-6">
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  value={formdata.startDateOfJourney}
                  onChange={(e) =>
                    setFormdata({
                      ...formdata,
                      startDateOfJourney: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-6">
                <input
                  type="date"
                  className="form-control"
                  id="endDate"
                  value={formdata.endDateOfJourney}
                  onChange={(e) =>
                    setFormdata({
                      ...formdata,
                      endDateOfJourney: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="nameOfHotels" className="form-label">
              Name of Hotels
            </label>

            <input
              type="text"
              className="form-control"
              id="nameOfHotels"
              placeholder="Add your Hotel Name"
              value={formdata.nameOfHotels}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  nameOfHotels: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <div className="row">
              <div className="col-6">
                <label htmlFor="tripType" className="form-label">
                  Trip Type
                </label>

                <select
  className="form-select"
  id="tripType"
  required
  value={formdata.tripType}
  onChange={(e) =>
    setFormdata({
      ...formdata,
      tripType: e.target.value,
    })
  }
>
  <option value="" disabled>
    Select One
  </option>

  <option value="backpacking">Backpacking</option>
  <option value="leisure">Leisure</option>
  <option value="business">Business</option>
</select>
              </div>

              <div className="col-6">
                <label htmlFor="totalCost" className="form-label">
                  Total Cost
                </label>

                <input
                  type="number"
                  className="form-control"
                  id="totalCost"
                  placeholder="99999"
                  value={formdata.totalCost}
                  onChange={(e) =>
                    setFormdata({
                      ...formdata,
                      totalCost: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="placesVisited" className="form-label">
              Places Visited
            </label>

            <input
              type="text"
              className="form-control"
              id="placesVisited"
              placeholder="Delhi, Paris, London, etc."
              value={formdata.placesVisited}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  placesVisited: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Featured Trip?</label>

            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                value={true}
                onChange={(e) =>
                  setFormdata({
                    ...formdata,
                    featured: JSON.parse(e.target.value),
                  })
                }
                checked={formdata.featured === true}
              />

              <label>True</label>
            </div>

            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                value={false}
                onChange={(e) =>
                  setFormdata({
                    ...formdata,
                    featured: JSON.parse(e.target.value),
                  })
                }
                checked={formdata.featured === false}
              />

              <label>False</label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image Link
            </label>

            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="http://xyz.com/image.png"
              value={formdata.image}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  image: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="shortDescription" className="form-label">
              Short Description
            </label>

            <textarea
              className="form-control"
              id="shortDescription"
              rows="2"
              placeholder="Write Short Description"
              value={formdata.shortDescription}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  shortDescription: e.target.value,
                })
              }
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="experience" className="form-label">
              Experience
            </label>

            <textarea
              className="form-control"
              id="experience"
              rows="5"
              placeholder="Write Complete Details about your experience in the trip."
              value={formdata.experience}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  experience: e.target.value,
                })
              }
            ></textarea>
          </div>

          <div className="mb-3" style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}