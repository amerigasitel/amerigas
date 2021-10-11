/*

*Start:
*Issue: Payment
*Case: Sold To
*Case Type: 
*Case Sub-Type:
*Create a Case: NO
*Process:
- CRM
- Search Account
- Enter account#, click 'Search' button.
- Verify NAME and DELIVERY ADDRESS on the account.
- click 'Magnifying Glass'.
- 'Application' tab -> 'SAP'
- Click  the INVOICE TILE in SAP.
- 'Invoice (1)' tab in the Invoice area.
- Ask the CUSTOMER for the Invoice that they want to pay.
- Put a TICK / CHECK the check-box.
- Click the MAKE PAYMENT button at the top right of the page.
- In the PAYMENT COCKPIT page.
     Company Code: OLPR
	 Cash Journal no: 9002
	 Business Area: 5738
- Click the EXECUTE button at the top.
- Enter the amount in CREDIT CARD input-box.
- Click the CHECK mark button in the Pop-Up box.
- Ask the CUSTOMER for CARD TYPE. Example: Visa or Master Card.
- In the CARD NUMBER -> CRM -> Application -> ECKOH
- Open the FINESSE then enter the 'Screen2Phone ID:'. example: 47902
- AGENT: Please enter your credit card followed by the pound(#) sign.
	** Press #1 in the Finesse, if the customer made a mistake.
	** Press #885 for MULTIPLE CREDIT CARDS.
	** 15 seconds, wait time threshold.
- Once, there is a GREEN CHECK beside the 'Call ID: #47092'
	** Go back to USD or PAYMENT COCKPIT window.
- AGENT: The last four digit of your credit card is '2501', IS THIS CORRECT?
	** Card type: Visa/MC/Amex
	** Card Number: 49-7bdAA4mv-2501
	** Valid To: 12/25
	** Card Holder: Jane Doe
- AGENT: May I have the EXPIRATION DATE / VALID TO of your credit card, please.
	** Repeat the 'VALID TO' to the customer.
- Click the CHECK button
- AGENT: You are about to pay the AMOUNT of ($628), Would you like me to go ahead and process the PAYMENT?
	** If YES then click the 'Yes' button.
	** If NO then click the 'Edit' button. Follow the on-screen process.
- Copy and Paste the 'Authorization Successful. Auth Code: PPS550' in the notepad,
- Click the CHECK button.
- Copy and Paste the 'Transaction Control Number: 16511075' in the notepad
- AGENT: Would you like RECEIPT sent to your email?
	** If NO click 'Cancel' button
	** If YES click the 'Print/Email' button, then VERIFY or ASK FOR EMAIL.
- Go back to CRM -> Notes & Activities
- Create Notes
	** Header: Payment
	** Body: Customer called in to make a payment of $$$
	** Paste the 'Auth Code' and 'Transaction Control #'
- Click 'Add Notes' button.
- Click the 'Save & Close' tab.

*Start:
*Issue: Down Payment
*Case: Sold To
*Case Type: 
*Case Sub-Type: 
*Create a Case: NO
*Process:
- CRM -> Search Account
- Verify NAME and DELIVERY ADDRESS on the account.
- Search the Account # -> click 'Magnifying Glass'
- APPLICATION -> SAP -> INVOICE Tile -> 
- click INVOICE(1) -> TICK invoice# -> click MAKE PAYMENT button
- In the PAYMENT COCKPIT page.
     Company Code: OLPR
	 Cash Journal no: 9002
	 Business Area: 5738
- Down Payment Options:
	Special G/L Ind: Downpayment(A)
	Document Date: 09/22/2021
	Posting Date; 09/22/2021
- click DOWNPAYMENT button -> click 'CHECK' button
- Enter the amount in CREDIT CARD input-box.
- Click the CHECK mark button in the Pop-Up box.
- Ask the CUSTOMER for CARD TYPE. Example: Visa or Master Card.
- In the CARD NUMBER -> CRM -> Application -> ECKOH
- Open the FINESSE then enter the 'Screen2Phone ID:'. example: 47902
- AGENT: Please enter your credit card followed by the pound(#) sign.
	** Press #1 in the Finesse, if the customer made a mistake.
	** Press #885 for MULTIPLE CREDIT CARDS.
	** 15 seconds, wait time threshold.
- Once, there is a GREEN CHECK beside the 'Call ID: #47092'
	** Go back to USD or PAYMENT COCKPIT window.
- AGENT: The last four digit of your credit card is '2501', IS THIS CORRECT?
	** Card type: Visa/MC/Amex
	** Card Number: 49-7bdAA4mv-2501
	** Valid To: 12/25
	** Card Holder: Jane Doe
- AGENT: May I have the EXPIRATION DATE / VALID TO of your credit card, please.
	** Repeat the 'VALID TO' to the customer.
- Click the CHECK button
- AGENT: You are about to pay the AMOUNT of ($628), Would you like me to go ahead and process the PAYMENT?
	** If YES then click the 'Yes' button.
	** If NO then click the 'Edit' button. Follow the on-screen process.
- Copy and Paste the 'Authorization Successful. Auth Code: PPS550' in the notepad,
- Click the CHECK button.
- Copy and Paste the 'Transaction Control Number: 16511075' in the notepad
- AGENT: Would you like RECEIPT sent to your email?
	** If NO click 'Cancel' button
	** If YES click the 'Print/Email' button, then VERIFY or ASK FOR EMAIL.
- Go back to CRM -> Notes & Activities
- Create Notes
	** Header: Payment
	** Body: Customer called in to make a down payment of $$$
	** Paste the 'Auth Code' and 'Transaction Control #'
- Click 'Add Notes' button.


*Start:
*Issue: Reverse or Refund Payment
*Case: Sold To
*Case Type: Billing A/R 
*Case Sub-Type: Refund
*Process:
- CRM -> Search Account
- Verify NAME and DELIVERY ADDRESS on the account.
- Click '+' -> in the Sold To copy the 'Account #'
- Search the Account # -> click 'Magnifying Glass'
- Click 'Create New Case' button.
- Summary: enter the 'Case Type', 'Case Sub-Type', 'Called in By:' and 'description'
- Click 'Save' button
- Application -> SAP -> Invoice Tile:
- Click the Document # for DOUBLE Payment
- Copy the ASSIGNMENT #
- Go back the CUSTOMER VIEW -> HOME -> 'Hamburger' icon -> ACCOUNTING -> PAYMENT COCKPIT
- Click EXECUTE button
- Enter the Transaction #: 00 + ASSIGNMENT#.
- AGENT: Would you like me to go ahead and refund the amount of $$$? -> Click YES
	** Copy the TRANSACTION #.
	** If CX ask for confirmation, give the CASE#
- CRM -> Notes & Activity
	** Note: Double Payment / Refund
	** Desc: Customer called in because of double payment in the account. Trasation #: XXXXXX.
- Save -> Resolved tab -> Accounts Updated
- Save & Close

*Start:




	
*/

