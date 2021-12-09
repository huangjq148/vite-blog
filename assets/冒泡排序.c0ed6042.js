var r=`<pre><code class="language-javascript">function sort(arr) {
  let length = arr.length;
  for (let i = 0; i &lt; length; i++) {
    for (let j = 0; j &lt; length - i; j++) {
      let tmp = arr[j + 1];
      if (tmp &lt; arr[j]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

console.log(sort([9, 2, 11, 18, 3, 17, 8, 80, 20, 5, 15, 24, 6, 1, 7]));
</code></pre>
`;export{r as default};
