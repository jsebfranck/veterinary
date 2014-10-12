module.exports = function(Pet) {
  Pet.validatesInclusionOf('Category', {in: ['dog', 'cat', 'bird']});
};
