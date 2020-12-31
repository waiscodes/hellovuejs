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
        <li v-form="(review, index) in reviews" :key="index">
          {{review.name}} gave this {{review.rating}} stars
          <br />
          "{{review.review}}"
        </li>
      </ul>
    </div>
    `,
});
