app.component("product-display", {
  template:
    /*html*/
    ` <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="image" />
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="onSale">{{sale}}</p>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div
              class="color-circle"
              v-for="(variant, index) in variants"
              :key="variant.id"
              @mouseover="updateVariant(index)"
              :style="{ backgroundColor: variant.color }"
            ></div>
            <button
              class="button"
              :class="{ disabledButton: !inStock }"
              :disabled="!inStock"
              v-on:click="addToCart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>`,
});
