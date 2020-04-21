import { connect } from "react-redux";
import TagPhotoIndex from "../tag_photo_index";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.user_id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(log_out(userId))
});

export default connect(mapStateToProps,mapDispatchToProps)(TagPhotoIndex);