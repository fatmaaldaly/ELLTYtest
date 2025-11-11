
// const selectAll = document.getElementById('select-all');
// const pageCheckboxes = document.querySelectorAll('.page');


// selectAll.addEventListener('change', () => {
//   pageCheckboxes.forEach(cb => cb.checked = selectAll.checked);
// });


// pageCheckboxes.forEach(cb => {
//   cb.addEventListener('change', () => {
//     selectAll.checked = [...pageCheckboxes].every(box => box.checked);
//   });
// });


// document.getElementById('done-btn').addEventListener('click', () => {
//   const selectedPages = [...pageCheckboxes]
//     .map((cb, i) => cb.checked ? `Page ${i+1}` : null)
//     .filter(Boolean);
//   alert(`Selected: ${selectedPages.join(', ') || 'None'}`);
// });
const selectAll = document.getElementById('select-all');
const pageCheckboxes = document.querySelectorAll('.page');
const doneBtn = document.getElementById('done-btn');

// Prevent label click from toggling checkbox
document.querySelectorAll('.checkbox-list label').forEach(label => {
  label.addEventListener('click', function(e) {
    // If the click is NOT on the checkbox itself, prevent toggle
    if (e.target.tagName !== 'INPUT') {
      e.preventDefault();
    }
  });
});

// Select all / deselect all functionality
selectAll.addEventListener('change', () => {
  pageCheckboxes.forEach(cb => cb.checked = selectAll.checked);
});

// Update "select all" if individual pages change
pageCheckboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    selectAll.checked = [...pageCheckboxes].every(box => box.checked);
  });
});

// Done button
doneBtn.addEventListener('click', () => {
  const selectedPages = [...pageCheckboxes]
    .map((cb, i) => cb.checked ? `Page ${i+1}` : null)
    .filter(Boolean);
  alert(`Selected: ${selectedPages.join(', ') || 'None'}`);
});
