export interface CheckoutRequest {
	harvestId: string;
	productId: string;
	quantity: number;
	customerId?: string;
}
export interface CheckoutSession {
	provider: 'square';
	url: string;
	externalId: string;
}
export interface CheckoutService {
	createCheckout(request: CheckoutRequest): Promise<CheckoutSession>;
}
export interface PaymentService {
	getPaymentStatus(externalPaymentId: string): Promise<'pending' | 'paid' | 'failed' | 'refunded'>;
}
export interface OrderService {
	confirmOrder(orderId: string): Promise<void>;
}
export interface RefundService {
	refundPayment(externalPaymentId: string, amountInCents: number, reason: string): Promise<string>;
}
export interface CustomerPaymentProfileService {
	linkSquareCustomer(customerId: string, squareCustomerId: string): Promise<void>;
}
export interface SquareWebhookService {
	verifySignature(body: string, signature: string, requestUrl: string): Promise<boolean>;
	processEvent(body: string): Promise<void>;
}
