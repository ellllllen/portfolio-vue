<template>
  <div>
    <Modal
      v-if="modalVisible"
      :data="modalData"
      @close="modalVisible = false"
    />
    <div v-bind:key="book.id" v-for="book in books">
      <h3 class="text-secondary">{{ book.title }}</h3>
      <div class="books">
        <div
          class="book"
          v-for="bookImage in book.bookImages"
          v-bind:key="bookImage.id"
        >
          <a v-on:click="showModal(bookImage.src)">
            <img
              class="image-thumbnail"
              v-if="bookImage.src"
              :src="require('@/assets/images/books/' + bookImage.src)"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataBooks from "@/data/books.json";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal
  },
  data() {
    return {
      modalVisible: false,
      modalData: null,
      books: dataBooks
    };
  },
  methods: {
    showModal(modalData) {
      this.modalData = modalData;
      this.modalVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.books {
  display: flex;
  flex-wrap: wrap;
}
.book {
  margin: 0 10px 10px 0;

  a {
    cursor: pointer;
  }
}
.image-thumbnail {
  width: 150px;
}
</style>
