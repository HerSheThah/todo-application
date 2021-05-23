exports.getDate = function()
{
  let today = new Date();

  let options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  return today.toLocaleDateString("en-US", options);
}
