import { Injectable, OnDestroy } from "@angular/core";
import { Observable, Subject, from } from "rxjs";

@Injectable()
export class AnimationFrameServiceSingleton implements OnDestroy {
	public tick: Observable<number>;

	protected frameSource = new Subject<number>();

	protected animationFrameId: number;

	constructor() {
		this.tick = this.frameSource.asObservable();
		this.animationFrameId = requestAnimationFrame(this.doTick.bind(this));
	}

	ngOnDestroy() {
		cancelAnimationFrame(this.animationFrameId);
	}

	protected doTick(frame: number) {
		this.frameSource.next(frame);
		requestAnimationFrame(this.doTick.bind(this));
	}
}

@Injectable()
export class AnimationFrameService {
	public tick: Observable<number>;

	constructor(protected singleton: AnimationFrameServiceSingleton) {
		this.tick = from(this.singleton.tick);
	}
}
