import {
	Injectable,
	OnDestroy,
	NgZone,
	inject
} from "@angular/core";
import { Observable, Subject, from } from "rxjs";

@Injectable({providedIn: "root"})
export class AnimationFrameServiceSingleton implements OnDestroy {
	public tick: Observable<number>;

	protected ngZone = inject(NgZone);

	protected frameSource = new Subject<number>();

	protected animationFrameId: number;

	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	constructor() {
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

	protected singleton = inject(AnimationFrameServiceSingleton);

	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	constructor() {
		this.tick = from(this.singleton.tick);
	}
}
