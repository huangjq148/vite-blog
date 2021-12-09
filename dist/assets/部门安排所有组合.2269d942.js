var t=`<pre><code class="language-javascript">
  /**
   * \u90E8\u95E8\u5B89\u6392\u6240\u6709\u7EC4\u5408
   * @param departments: dict, key\u662F\u90E8\u95E8\u540D, value\u662F\u6BCF\u4E2A\u90E8\u95E8\u5BF9\u5E94\u6240\u6709\u5458\u5DE5ID\u6570\u7EC4
   *   \u4F8B {&#39;frontend&#39;: [1, 2], &#39;backend&#39;: [3, 4], &#39;devops&#39;: [5]}
   * @param required_department: dict, \u8BE5\u4EFB\u52A1\u9700\u8981\u53C2\u4E0E\u7684\u90E8\u95E8\u548C\u9700\u8981\u7684\u4EBA\u6570
   *   \u4F8B {&#39;frontend&#39;: 2, &#39;backend&#39;: 1}
   * @return \u6240\u6709\u53EF\u80FD\u7684\u5458\u5DE5\u7EC4\u5408, \u4F8B [[1, 2, 3], [1, 2, 4]]. \u6309\u5458\u5DE5ID\u5347\u5E8F\u6392\u5E8F
   */
  staffCombinations: (department_staff_dict, required_staff) =&gt; {
    //TODO your code goes here...
    return null;
  },

var staffCombinations = (department_staff_dict, required_staff) =&gt; {
    function getAllPos(arr,count){
        var finalArr = [];
        function test (data,total){

            const result = {arr:[]}
            const startIndex = 0;

            addItem(result,startIndex, data, total,[])
            return finalArr
        }

        function addItem(result, startIndex, data, total, tmpArr){
            if(total==0){
                if(result.arr){
                    finalArr.push(result.arr)
                }
                //console.log(result.arr)
                return result;
            }else{
                let end = data.length - total+1;
                let tmpStart = startIndex;
                while(tmpStart &lt; end){
                    !result.arr &amp;&amp; (result.arr=[])
                    result[data[tmpStart]]={}
                    tmpArr.push(data[tmpStart])

                    !result[data[tmpStart]].arr&amp;&amp; (result[data[tmpStart]].arr = [])

                    let tmp = JSON.parse(JSON.stringify(result.arr))
                    tmp.push(data[tmpStart])

                    result[data[tmpStart]].arr = tmp

                    tmpStart++
                }


                Object.keys(result).map(item=&gt;{
                    addItem(result[item], ++startIndex, data, total-1,tmpArr);
                })
            }
        }
        return test(arr,count )
    }

    //TODO your code goes here...
    var arrObj = {}
    const keys = Object.keys(required_staff);
    keys.map((item,index)=&gt;{
        arrObj[index] = getAllPos(department_staff_dict[item],required_staff[item])
    })
    let result = []
    function filterFn(dataResult,index = 0, arr=[]){
        if(!dataResult[index] || index == dataResult[index].length){
            console.log(arr)
            result.push(arr)
            return ;
        }
        for(let i=0;i&lt;dataResult[index].length;i++){
            let tmpArr = JSON.parse(JSON.stringify(arr))
            tmpArr = tmpArr.concat(dataResult[index][i])

            filterFn(dataResult,index+1,tmpArr)
        }
    }
    filterFn(arrObj)

    return result;
  }
staffCombinations({&#39;frontend&#39;: [1, 2,3,4,5], &#39;backend&#39;: [6,7], &#39;devops&#39;: [5]}, {&#39;frontend&#39;: 2, &#39;backend&#39;: 1})
</code></pre>
`;export{t as default};
