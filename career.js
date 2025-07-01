function selectRelocate(value) {
    document.getElementById('relocate').value = value;
    document.querySelectorAll('.relocate-option').forEach(btn => {
      btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
  }