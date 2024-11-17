import { defineComponent } from "vue";

// named exports w/ variable declaration: ok
export const Foo = defineComponent({});

// named exports referencing variable declaration: ok
const Bar = defineComponent({
  render() {
    return <div>Test11</div>;
  }
});
export { Bar };
// default export referencing variable declaration: ok

const Baz = defineComponent({
  setup() {  // 注意：这里的 JSX 实际上会被 Babel 插件转换为 h(...) 调用
    return () => (
      <>
        <div>Hello Water</div>
      </>
    );
  }
});

export default Baz;