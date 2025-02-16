import { useState } from "react";
import { Label, TextInput, Select, Radio, Button, Card } from "flowbite-react";

export default function Managing_form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    gender: "male",
  });

  // Handle change function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="firstName" value="First Name" />
            <TextInput
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              required
              onChange={handleChange}
              value={formData.firstName} 
            />
          </div>

          <div>
            <Label htmlFor="lastName" value="Last Name" />
            <TextInput
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              required
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>

          <div>
            <Label htmlFor="city" value="Choose City" />
            <Select
              id="city"
              name="city"
              required
              onChange={handleChange}
              value={formData.city} // Bind value to state
            >
              <option value="">Select a city</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Pokhara">Pokhara</option>
              <option value="Lalitpur">Lalitpur</option>
            </Select>
          </div>

          <fieldset className="flex gap-4">
            <legend className="text-sm font-medium">Gender</legend>
            <div className="flex items-center gap-2">
              <Radio
                id="male"
                name="gender"
                value="Male"
                onChange={handleChange}
                checked={formData.gender === "Male"} 
              />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="female"
                name="gender"
                value="Female"
                onChange={handleChange}
                checked={formData.gender === "Female"} 
              />
              <Label htmlFor="female">Female</Label>
            </div>
          </fieldset>

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}
