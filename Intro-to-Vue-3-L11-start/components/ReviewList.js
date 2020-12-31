app.component("review-list", {
  props: {
    review: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class='review-container'>
      <h3>Reviews:</h3>
      <ul>
        <li >
          Hello world
        </li>
      </ul>
    </div>
    `,
});
