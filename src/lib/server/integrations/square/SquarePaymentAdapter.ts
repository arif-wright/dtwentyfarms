import type {
	CheckoutService,
	CheckoutRequest,
	CheckoutSession,
	PaymentService
} from '$lib/server/services/commerce';
/** Future server-only adapter. Deliberately makes no API calls in Phase 1. */
export class SquarePaymentAdapter implements CheckoutService, PaymentService {
	async createCheckout(_request: CheckoutRequest): Promise<CheckoutSession> {
		throw new Error('Native Square checkout is not implemented in Phase 1.');
	}
	async getPaymentStatus(
		_externalPaymentId: string
	): Promise<'pending' | 'paid' | 'failed' | 'refunded'> {
		throw new Error('Square payment synchronization is not implemented in Phase 1.');
	}
}
