import { useState } from "react";
import axios from "axios";

function postExample() {
  const [formData, setFormData] = useState({
    name: "",
    studentNum: "",
    phoneNum: "",
    email: "",
    laptop: false,
    session: false,
    track: "BACKEND",
    trackQ: "",
    beQ1: "",
    beQ2: "",
    beQ3: "",
    beQ4: "",
    beQ5: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://syu-likelion.org/applications", formData);
      console.log("Success:", response.data);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit application.");
    }
  };

  return (
    <div>
      <h1>Recruitment Application</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="studentNum" placeholder="Student Number" value={formData.studentNum} onChange={handleChange} required />
        <input type="text" name="phoneNum" placeholder="Phone Number" value={formData.phoneNum} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <label>
          <input type="checkbox" name="laptop" checked={formData.laptop} onChange={handleChange} />
          Owns a laptop
        </label>
        <label>
          <input type="checkbox" name="session" checked={formData.session} onChange={handleChange} />
          Can attend sessions
        </label>
        <select name="track" value={formData.track} onChange={handleChange}>
          <option value="BACKEND">Backend</option>
          <option value="FRONTEND">Frontend</option>
          <option value="PLAN_DESIGN">Plan/Design</option>
        </select>
        <input type="text" name="trackQ" placeholder="Track Question" value={formData.trackQ} onChange={handleChange} required />
        <input type="text" name="beQ1" placeholder="Backend Q1" value={formData.beQ1} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default postExample;