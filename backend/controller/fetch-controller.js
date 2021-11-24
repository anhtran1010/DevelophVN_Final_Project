import Universities from "../models/school";
import Fields from "../models/fields";

//fetch data for fields of study inside filter
export const FieldStudy = (req, res) => {

}

export const schoolData = async (req, res) => { 
  try {
      const school = await Universities.find({});
              
      res.status(200).json(school);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}




