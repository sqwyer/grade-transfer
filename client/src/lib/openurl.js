export default function OpenURL(url, scope) {
  if(!scope) window.open(url);
  else if (scope != undefined) window.open(url, scope);
}