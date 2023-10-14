import { auth, googleAuth } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import * as actions from "./actions";
export const signInApi = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuth)
      .then((payload) => {
        dispatch(actions.setUser(payload.user));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

export const getUserAuth = () => {
  // to change user account which stored in redux
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(actions.setUser(user));
      }
    });
  };
};

export const signOutApi = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(actions.setUser(null));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};
