const selectAll = document.getElementById('select-all');
const pageCheckboxes = document.querySelectorAll('.page');
const doneBtn = document.getElementById('done-btn');


document.querySelectorAll('.checkbox-list label').forEach(label => {
  label.addEventListener('click', function(e) {
 
    if (e.target.tagName !== 'INPUT') {
      e.preventDefault();
    }
  });
});


selectAll.addEventListener('change', () => {
  pageCheckboxes.forEach(cb => cb.checked = selectAll.checked);
});


pageCheckboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    selectAll.checked = [...pageCheckboxes].every(box => box.checked);
  });
});


doneBtn.addEventListener('click', () => {
  const selectedPages = [...pageCheckboxes]
    .map((cb, i) => cb.checked ? `Page ${i+1}` : null)
    .filter(Boolean);
  alert(`Selected: ${selectedPages.join(', ') || 'None'}`);
});
