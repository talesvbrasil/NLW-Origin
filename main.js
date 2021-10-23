const LinksSocialMedia = {
  github: 'talesvbrasil',
  youtube: 'channel/UC7d_Wmp85apf1561i46udKw',
  facebook: 'talesvbrasil',
  instagram: 'talesvbrasil',
  twitter: 'talesvbrasil'
}
function changeSocialLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}
changeSocialLinks()

function getGithubProfileInfos() {
  const url = `http://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGithubProfileInfos()
