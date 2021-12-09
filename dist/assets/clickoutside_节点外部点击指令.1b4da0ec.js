var n=`<pre><code class="language-html">&lt;template&gt;
    &lt;div class=&quot;service-setting-container&quot;&gt;
        &lt;el-table v-clickoutside=&quot;handleOutsideClick&quot; :data=&quot;serviceSettingList&quot; row-key=&quot;id&quot; border @row-click=&quot;handleRowClick&quot; default-expand-all&gt;
            &lt;el-table-column prop=&quot;updateUser&quot; label=&quot;\u64CD\u4F5C\u4EBA&quot;&gt; &lt;/el-table-column&gt;
        &lt;/el-table&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import clickoutside from &#39;@/utils/clickoutside&#39;;

export default {
    name: &quot;serviceSetting&quot;,
    data() {
        return {
        };
    },

    methods:{
        handleOutsideClick(){
            console.log(&quot;\u89E6\u53D1\u5916\u90E8\u70B9\u51FB\u4E8B\u4EF6&quot;)
        }
    },

    directives: {
        clickoutside
    }
}
</code></pre>
<pre><code class="language-javascript">import Vue from &quot;vue&quot;;
import { on } from &quot;main/utils/dom&quot;;

const nodeList = [];
const ctx = &quot;@@clickoutsideContext&quot;;

let startClick;
let seed = 0;

!Vue.prototype.$isServer &amp;&amp; on(document, &quot;mousedown&quot;, (e) =&gt; (startClick = e));

!Vue.prototype.$isServer &amp;&amp;
  on(document, &quot;mouseup&quot;, (e) =&gt; {
    nodeList.forEach((node) =&gt; node[ctx].documentHandler(e, startClick));
  });

function createDocumentHandler(el, binding, vnode) {
  return function (mouseup = {}, mousedown = {}) {
    if (
      !vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target ||
      (vnode.context.popperElm &amp;&amp;
        (vnode.context.popperElm.contains(mouseup.target) ||
          vnode.context.popperElm.contains(mousedown.target)))
    )
      return;

    if (
      binding.expression &amp;&amp;
      el[ctx].methodName &amp;&amp;
      vnode.context[el[ctx].methodName]
    ) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn &amp;&amp; el[ctx].bindingFn();
    }
  };
}

/**
 * v-clickoutside
 * @desc \u70B9\u51FB\u5143\u7D20\u5916\u9762\u624D\u4F1A\u89E6\u53D1\u7684\u4E8B\u4EF6
 * @example
 * \`\`\`vue
 * &lt;div v-element-clickoutside=&quot;handleClose&quot;&gt;
 * \`\`\`
 */
export default {
  bind(el, binding, vnode) {
    nodeList.push(el);
    const id = seed++;
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value,
    };
  },

  update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },

  unbind(el) {
    let len = nodeList.length;

    for (let i = 0; i &lt; len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  },
};
</code></pre>
`;export{n as default};
