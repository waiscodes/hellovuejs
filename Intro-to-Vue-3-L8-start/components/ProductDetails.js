app.component("product-display", {
  props: {
    type: string,
    required: true,
  },
  template:
    /*html*/
    `
    <div>
      <p>This is where the details would go</p>
    </div>
  `,
  computed: {
    details() {
      if (this.details) {
        return `the Details`;
      }
    },
  },
});
