import {
	Injectable,
	OnDestroy,
	NgZone,
	Optional,
	SkipSelf
} from "@angular/core";
import { Observable, Subject, from } from "rxjs";

@Injectable()
export class AnimationFrameServiceSingleton implements OnDestroy {
	public tick: Observable<number>;

	protected frameSource = new Subject<number>();

	protected animationFrameId: number;

	constructor(protected ngZone: NgZone) {
		this.tick = this.frameSource.asObservable();
		this.ngZone.runOutsideAngular(() => {
			this.animationFrameId = requestAnimationFrame(this.doTick.bind(this));
		});
	}

	ngOnDestroy() {
		cancelAnimationFrame(this.animationFrameId);
	}

	protected doTick(frame: number) {
		this.frameSource.next(frame);
		this.ngZone.runOutsideAngular(() => {
			requestAnimationFrame(this.doTick.bind(this));
		});
	}
}

@Injectable()
export class AnimationFrameService {
	public tick: Observable<number>;

	constructor(protected singleton: AnimationFrameServiceSingleton) {
		this.tick = from(this.singleton.tick);
	}
}

// TODO: use `providedIn` instead of the provider factory pattern
// either provides a new instance of AnimationFrameServiceSingleton, or returns the parent
export function ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY(parentService: AnimationFrameServiceSingleton, ngZone: NgZone) {
	return parentService || new AnimationFrameServiceSingleton(ngZone);
}

export const ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER = {
	provide: AnimationFrameServiceSingleton,
	deps: [[new Optional(), new SkipSelf(), AnimationFrameServiceSingleton], NgZone],
	useFactory: ANIMATION_FRAME_SERVICE_SINGLETON_PROVIDER_FACTORY
};
