const dragElement = (element) => {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(element.id)) {
    /* move div relative from header*/
    document.getElementById(element.id).onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  }

  const dragMouseDown = (e) => {
    e = e || window.e;
    e.preventDefault();
    //position of mouse at start
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = stopDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  };

  const elementDrag = (e) => {
    e = e || window.e;
    e.preventDefault();
    //new position calc
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    element.style.top = element.offsetTop - pos2 + "px";
    element.style.left = element.offsetLeft - pos1 + "px";
  };
  const stopDragElement = () => {
    //stop on mouse release
    document.onmouseup = null;
    document.onmousemove = null;
  };
};

export default dragElement;
