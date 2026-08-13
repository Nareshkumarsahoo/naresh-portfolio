import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export const Hero3DUniverse: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hudTime, setHudTime] = useState('');

  // Update HUD Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setHudTime(now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0').slice(0, 2));
    };
    const timer = setInterval(updateTime, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const currentContainer = mountRef.current;
    if (!currentContainer) return;

    const width = currentContainer.clientWidth;
    const height = currentContainer.clientHeight;

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentContainer.appendChild(renderer.domElement);

    // Group to hold all objects for subtle mouse tilt
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Glowing Digital Core
    const coreGeo = new THREE.IcosahedronGeometry(2.8, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Inner Glowing Core Sphere
    const innerGeo = new THREE.SphereGeometry(1.5, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: false,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerCore);

    // Orbital Ring 1
    const ringGeo1 = new THREE.TorusGeometry(4.5, 0.04, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    // Orbital Ring 2
    const ringGeo2 = new THREE.TorusGeometry(5.8, 0.03, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.4 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 2. Floating Neural Nodes & Connections
    const nodeCount = isMobile ? 30 : 60;
    const nodePositions: THREE.Vector3[] = [];
    const nodeGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

    const nodesGroup = new THREE.Group();
    mainGroup.add(nodesGroup);

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16
      );
      nodePositions.push(pos);
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      mesh.position.copy(pos);
      nodesGroup.add(mesh);
    }

    // Line Connections between close nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.18,
    });

    const lineGeo = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 4.5) {
          linePositions.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
        }
      }
    }

    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const linesMesh = new THREE.LineSegments(lineGeo, lineMaterial);
    mainGroup.add(linesMesh);

    // 3. Floating Particles Field
    const particleCount = isMobile ? 150 : 350;
    const particleGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      pPositions[i] = (Math.random() - 0.5) * 28;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.5,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particleSystem);

    // 4. Abstract Floating Geometric Code Elements
    const geomGroup = new THREE.Group();
    mainGroup.add(geomGroup);

    const dodecGeo = new THREE.DodecahedronGeometry(0.6);
    const octGeo = new THREE.OctahedronGeometry(0.5);
    const techMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true });

    for (let i = 0; i < 6; i++) {
      const mesh = new THREE.Mesh(i % 2 === 0 ? dodecGeo : octGeo, techMat);
      mesh.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10
      );
      geomGroup.add(mesh);
    }

    // Ambient Lighting
    const pointLight = new THREE.PointLight(0x00f0ff, 2, 50);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    const violetLight = new THREE.PointLight(0x8b5cf6, 2, 50);
    violetLight.position.set(-10, 10, -5);
    scene.add(violetLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = currentContainer.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / (rect.width / 2)) * 0.4;
      targetY = (y / (rect.height / 2)) * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Window Resize Handler
    const handleResize = () => {
      if (!currentContainer) return;
      const w = currentContainer.clientWidth;
      const h = currentContainer.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.15 + mouseX;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1 + mouseY;

      // Pulsate Central Core
      coreMesh.rotation.x = elapsedTime * 0.3;
      coreMesh.rotation.y = elapsedTime * 0.2;
      const scale = 1 + Math.sin(elapsedTime * 2) * 0.06;
      coreMesh.scale.set(scale, scale, scale);

      innerCore.scale.set(
        1 + Math.cos(elapsedTime * 3) * 0.08,
        1 + Math.cos(elapsedTime * 3) * 0.08,
        1 + Math.cos(elapsedTime * 3) * 0.08
      );

      ring1.rotation.z = elapsedTime * 0.25;
      ring2.rotation.z = -elapsedTime * 0.2;

      // Float geometric objects
      geomGroup.children.forEach((child, index) => {
        child.rotation.x += 0.01 * (index + 1);
        child.rotation.y += 0.015 * (index + 1);
        child.position.y += Math.sin(elapsedTime + index) * 0.005;
      });

      // Slowly rotate particle field
      particleSystem.rotation.y = -elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentContainer && renderer.domElement) {
        currentContainer.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, [isMobile]);

  return (
    <div className="relative w-full h-[450px] md:h-[580px] flex items-center justify-center select-none">
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Futuristic HUD Overlay */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 md:p-6 text-[10px] font-mono tracking-widest text-cyan-400/70">
        {/* Top HUD Bar */}
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 bg-gradient-to-r from-cyan-950/20 via-transparent to-purple-950/20 px-2 rounded-t-lg backdrop-blur-[2px]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-cyan-300 font-bold">SYSTEM // ONLINE</span>
          </div>
          <div className="hidden sm:block text-gray-400">
            FREQ: 144Hz | CORE_TEMP: 32°C
          </div>
          <div className="text-cyan-400 font-mono">
            {hudTime || '00:00:00.00'}
          </div>
        </div>

        {/* Floating Lateral Tech Coordinates */}
        <div className="flex justify-between items-center my-auto">
          <div className="hidden sm:flex flex-col space-y-1 text-gray-500 text-[9px] border-l border-cyan-500/30 pl-2 py-1">
            <span>NODE_ID: #85B4B9</span>
            <span>POLYGONS: 2,480</span>
            <span>SHADERS: GLSL_V3</span>
          </div>
          <div className="hidden sm:flex flex-col space-y-1 text-right text-gray-500 text-[9px] border-r border-purple-500/30 pr-2 py-1">
            <span>NEURAL_NET: ACTIVE</span>
            <span>DSA_OPS: O(1)</span>
            <span>LOC: SOA_UNI_BBSR</span>
          </div>
        </div>

        {/* Bottom HUD Bar */}
        <div className="flex items-center justify-between border-t border-cyan-500/20 pt-2 bg-gradient-to-r from-cyan-950/20 via-transparent to-purple-950/20 px-2 rounded-b-lg backdrop-blur-[2px]">
          <div className="flex items-center space-x-2 text-gray-300">
            <span className="text-cyan-400">STATUS:</span>
            <span className="animate-pulse">BUILDING INTELLIGENT SYSTEMS</span>
          </div>
          <div className="text-purple-400 text-[9px] uppercase tracking-wider font-semibold">
            Naresh Kumar Sahoo • 3D Core
          </div>
        </div>
      </div>

      {/* Decorative HUD Corner Crosshairs */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400/50 pointer-events-none" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400/50 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400/50 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400/50 pointer-events-none" />
    </div>
  );
};
