import { auth, googleAuth, storage, db } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import * as actions from "./actions";
import { addDoc, collection } from "firebase/firestore";
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
export const postArticleApi = (payload) => {
  return (dispatch) => {
    dispatch(actions.setLoading(true));
    if (payload.image) {
      const storageRef = ref(storage, `images/${payload.image.name}`);
      const uploadRef = uploadBytesResumable(storageRef, payload.image);
      console.log(storageRef);
      uploadRef.on(
        "state_changed",
        (snapshot) => {
          const progress =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`upload is ${progress}`);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadRef.snapshot.ref).then((downloadURl) => {
            const collRef = collection(db, "articles");
            addDoc(collRef, {
              actor: {
                email: payload.user.email,
                name: payload.user.displayName,
                date: payload.timestamp,
                image: payload.user.photoURL,
              },
              comments: 0,
              video: payload.video,
              description: payload.description,
              shareImg: downloadURl,
            });
          });
        }
      );
      dispatch(actions.setLoading(false));
    } else if (payload.video) {
      const collRef = collection(db, "articles");
      addDoc(collRef, {
        actor: {
          email: payload.user.email,
          name: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        comments: 0,
        video: payload.video,
        description: payload.description,
        shareImg: payload.image,
      });
      dispatch(actions.setLoading(false));
    } else {
      const collRef = collection(db, "articles");
      addDoc(collRef, {
        actor: {
          email: payload.user.email,
          name: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        comments: 0,
        video: payload.video,
        description: payload.description,
        shareImg: payload.image,
      });
      dispatch(actions.setLoading(false));
    }
  };
};
