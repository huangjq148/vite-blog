var r=`<pre><code class="language-javascript">function sort(arr) {
  let len = arr.length;
  let preIndex, tmp;

  for (var i = 1; i &lt; len; i++) {
    preIndex = i - 1;
    tmp = arr[i];
    while (preIndex &gt;= 0 &amp;&amp; tmp &lt; arr[preIndex]) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[++preIndex] = cur;
  }
  return arr;
}

console.log(sort([9, 2, 11, 18, 3, 17, 8, 80, 20, 5, 15, 24, 6, 1, 7]));
</code></pre>
`;export{r as default};
