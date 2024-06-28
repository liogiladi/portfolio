import { useEffect, useRef } from "react";
import styles from "@/styles/components/network-background.module.scss";
import useWindowSize from "@/hooks/useWindowSize";
import { clamp } from "@/utils/math";

function NetworkBackground() {
	const windowSize = useWindowSize();
	const ref = useRef<HTMLCanvasElement>(null);
	const points = useRef<Point[]>([]);

	useEffect(() => {
		const ctx = ref.current?.getContext("2d");

		const numOfPoints = clamp(Math.round(windowSize.width / 190), 3, 7);

		if (ctx) {
			ctx.clearRect(0, 0, windowSize.width, window.innerHeight);
			points.current = [];

			// Generating points' positions
			for (let i = 0; i <= numOfPoints + 1; i++) {
				for (let j = 0; j <= numOfPoints + 1; j++) {
					const x = i * (windowSize.width / numOfPoints);
					const y = j * (windowSize.height / numOfPoints);
					const point = new Point(x, y, ctx);
					points.current.push(point);
				}
			}
		}

		let id: number;
		function animate() {
			if (!ctx) return;

			ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

			// Move points
			points.current.forEach((point) => {
				point.update();
			});

			// Draw connecting lines
			points.current.forEach((a) => {
				points.current.forEach((b) => {
					const distance = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
					const opacity = 1 - distance / 300;

					if (distance < 300 && opacity > 0) {
						ctx.beginPath();
						ctx.moveTo(a.x, a.y);
						ctx.lineTo(b.x, b.y);
						ctx.strokeStyle = `rgba(0,0,0,${opacity})`;
						ctx.stroke();
					}
				});
			});

			id = requestAnimationFrame(animate);
		}

		id = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(id);
		};
	}, [windowSize]);

	return (
		<div id={styles["network-background"]}>
			<canvas {...windowSize} ref={ref}></canvas>
		</div>
	);
}

export default NetworkBackground;

const POINT_RADIUS = 3;
const POINT_SPEED = 0.2;
const POINT_BOUNDRY_RADIUS = 30;

class Point {
	x: number;
	y: number;
	dx: number;
	dy: number;
	ctx: CanvasRenderingContext2D;
	bounds: Record<"left" | "right" | "bottom" | "top", number>;

	constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
		this.x = x + ((-POINT_BOUNDRY_RADIUS / 3) * Math.random() * POINT_BOUNDRY_RADIUS) / 3;
		this.y = y + ((-POINT_BOUNDRY_RADIUS / 3) * Math.random() * POINT_BOUNDRY_RADIUS) / 3;
		this.dx = -POINT_SPEED + Math.random() * POINT_SPEED;
		this.dy = -POINT_SPEED + Math.random() * POINT_SPEED;

		this.bounds = {
			left: x - POINT_BOUNDRY_RADIUS,
			right: x + POINT_BOUNDRY_RADIUS,
			top: y + POINT_BOUNDRY_RADIUS,
			bottom: y - POINT_BOUNDRY_RADIUS,
		};

		this.ctx = ctx;

		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, POINT_RADIUS, 0, 2 * Math.PI);
		this.ctx.fill();
	}

	update() {
		this.ctx.beginPath();

		if (this.x + POINT_RADIUS + this.dx < this.bounds.left || this.x + this.dx > this.bounds.right) {
			this.dx *= -1;
		}

		if (this.y + POINT_RADIUS + this.dy < this.bounds.bottom || this.y + this.dy > this.bounds.top) {
			this.dy *= -1;
		}

		this.x += this.dx;
		this.y += this.dy;
		this.ctx.arc(this.x + this.dx, this.y + this.dy, POINT_RADIUS, 0, 2 * Math.PI);
		this.ctx.fill();
	}
}
