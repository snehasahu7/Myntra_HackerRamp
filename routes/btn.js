const shareBtn = document.getElementById('share-btn');
const shareMenu = document.getElementById('share-menu');

shareBtn.addEventListener('click', (e) => {
  e.preventDefault();
  shareMenu.classList.toggle('hidden');
});

const share = (platform) => {
  const url = window.location.href;
  let link = '';

  switch (platform) {
    case 'facebook':
      link = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      break;
    case 'twitter':
      link = `https://twitter.com/intent/tweet?url=${url}&text=Check%20this%20out!`;
      break;
    case 'linkedin':
      link = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=Check%20this%20out!`;
      break;
    case 'whatsapp':
      link = `https://api.whatsapp.com/send?text=${url}`;
      break;
    case 'email':
      link = `mailto:?subject=Check%20this%20out!&body=${url}`;
      break;
    default:
      console.error(`Unknown platform: ${platform}`);
  }

  window.open(link, '_blank');
};