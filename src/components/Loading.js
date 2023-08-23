import { Vortex } from 'react-loader-spinner';
function Loading() {
  return (
    <div className="fixed z-10 top-[80%] right-[49%]">
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
}

export default Loading;
