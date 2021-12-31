import Volunteer from './Volunteer';
import VolunteerTop from './VolunteerTop';
import './volunteer.css';
import VolunteerMessage from './VolunteerMessage';
import VolunteerForm from './VolunteerForm';

const VolunteerMain = () => (
  <div className="min-heigth">
    <VolunteerTop />
    <Volunteer />
    <VolunteerMessage />
    <VolunteerForm />
  </div>
);

export default VolunteerMain;
