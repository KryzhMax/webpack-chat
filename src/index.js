import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { btnRef, chatContainer } from "./refs";
import { toAuthenticate, signOutUser } from "./service/firebase";

// console.log("11111 :>> ", 11111);

function toLogIn(evt) {
  let id = evt.target.dataset.id;
  console.log(id);
  if (id === "Sign in") {
    toAuthenticate();
  } else {
    signOutUser();
  }
}
console.log(btnRef);
export function toggleContent(user) {
  let statusUser = "Sign in";
  if (user) {
    statusUser = "Sign out";
  }
  btnRef.textContent = statusUser;
  btnRef.dataset.id = statusUser;
  console.log(toggleContent);
}

btnRef.addEventListener("click", toLogIn);
