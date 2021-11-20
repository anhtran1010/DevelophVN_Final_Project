import { _fetchData } from '../models/school.js';
export var fetchData = (req, res) => {

  _fetchData(function (data) {
    res.render('school-info', { Universities: data });
  });
}