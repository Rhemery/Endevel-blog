<template>
  <div class="tag">
    <slot name="name"></slot>
  </div>
</template>

<style scoped lang="scss">
.tag {
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.445);
  margin: 0.25rem;
  margin-top: 1rem;
  cursor: default;

  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &.add-tag {
    border: 2px solid #039be5;
    background-color: rgba(103, 250, 255, 0.329);

    &:hover {
      background-color: rgba(103, 250, 255, 0.74);
    }
  }

  &.edit {
    border: 2px solid #039be5;
    background-color: rgba(103, 250, 255, 0.329);

    &:hover {
      background-color: rgba(103, 250, 255, 0.74);
    }
  }

  &.active {
    border: 2px solid rgba(0, 0, 0, 0.445);
    background-color: rgb(204, 204, 204);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  }
}

.filter>.tag {
  &:hover {
    color: rgb(0, 0, 0);
    background-color: rgb(240, 240, 240);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
}

.tags>.tag.add-tag {
  &:hover {
    color: rgb(0, 0, 0);
    background-color: rgb(240, 240, 240);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
}

.modal-content>.tag {
  &:hover {
    color: rgb(0, 0, 0);
    background-color: rgb(240, 240, 240);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
}

.tags.no-add>.tags>.tag.add-tag {
  display: none;
}

.filter>.tag {
  &.delete {
    color: rgb(0, 0, 0);
    border: 1px solid rgb(255, 0, 0);

    &::after {
      content: 'x';
      margin-left: 0.5rem;

    }

    &:hover {
      color: rgb(255, 255, 255);
      background-color: rgb(255, 0, 0);
      border: 1px solid rgb(255, 0, 0);
    }
  }
}
</style>
