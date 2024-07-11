<script>
	import { T, useTask } from "@threlte/core";
	import { interactivity, OrbitControls } from "@threlte/extras";
	import { BoxGeometry, GridHelper, MeshStandardMaterial } from "three";

	interactivity()
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 5, 10]}
	lookAt.y={0.5}
>
	<OrbitControls />
</T.PerspectiveCamera>

<T.DirectionalLight
	position={[0, 10, 10]}
/>
<T.AmbientLight intensity={0.3} />

<T.GridHelper
	args={[10, 10]}
/>

<T.Mesh
	position.y={1}
	geometry={new BoxGeometry(2, 2, 2)}
	material={new MeshStandardMaterial({ color: "red" })}
/>
