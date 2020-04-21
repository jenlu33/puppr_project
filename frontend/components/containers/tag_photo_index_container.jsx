import { connect } from "react-redux";
import TagPhotoIndex from "../tag_photo_index";
import {fetchTag} from '../../actions/tag_actions';
import {fetchTagPhotos} from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  tag: state.entities.tags[ownProps.match.params.tagId]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(log_out(userId)),
  fetchTag: (tagId) => dispatch(fetchTag(tagId)),
  displayPhotos: (tagId) => dispatch(fetchTagPhotos(tagId))
});

export default connect(mapStateToProps,mapDispatchToProps)(TagPhotoIndex);