module.exports = {
  afterCreate(event) {
    console.log('afterCreate', event);
    const { result, params } = event;
    console.log('afterCreate', result, params);
  }
}