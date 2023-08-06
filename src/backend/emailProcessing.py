```python
import imaplib
import email
from email.header import decode_header
from nlpProcessing import processNLP

# initialize an IMAP4 class with SSL 
imap = imaplib.IMAP4_SSL("imap.gmail.com")
# authenticate
resp, data = imap.login("user@gmail.com", "password")

def scanInbox():
    # select the mailbox you want to delete in
    # if you want SPAM, use "INBOX.SPAM"
    resp, items = imap.select("INBOX")

    # you could change the search criterion to 
    # "ALL" instead of "UNSEEN"
    # check https://yuji.wordpress.com/2011/06/22/python-imaplib-imap-example-with-gmail/
    # for other search criterion
    resp, items = imap.uid('search', None, "(UNSEEN)")
    items = items[0].split()

    emailList = []

    for emailid in items[::-1]:
        resp, data = imap.uid('fetch', emailid, "(BODY[HEADER.FIELDS (FROM SUBJECT DATE)])")
        raw = data[0][1].decode("utf-8")
        email_message = email.message_from_string(raw)

        # decode the email subject
        subject = decode_header(email_message['Subject'])[0][0]
        if isinstance(subject, bytes):
            # if it's a bytes type, decode to str
            subject = subject.decode()
        # decode email sender
        from_ = decode_header(email_message.get('From'))[0][0]
        if isinstance(from_, bytes):
            from_ = from_.decode()

        # categorize email based on content and sender
        category = processNLP(subject)

        emailList.append({
            'subject': subject,
            'from': from_,
            'category': category
        })

    return emailList
```