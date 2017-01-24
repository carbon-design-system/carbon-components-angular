class ModalContainer {
  destroy: Function;
  closeModal(): void {
    this.destroy();
  }
}

export default function Modal() {
  return function(target) {
    Object.assign(target.prototype, ModalContainer.prototype);
  };
}
