(async () => {
    // put keys in backtick (``) to avoid errors caused by spaces or tabs
    const publicKeyArmored = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
m/OrQY0KQsKe+liIEuLQ5g==
=FyNy
-----END PGP PUBLIC KEY BLOCK-----`;
    const privateKeyArmored = `-----BEGIN PGP PRIVATE KEY BLOCK-----

lQWGBGKYmNoBDAC7wGDE2CLPmX/vbVnhWS31eq1Q3EzqLHhgKZZTHSK4UjDb00gg
Pr7htW5zq7tKKGjv8nn/Ov3sNJUUFiu9YyMNLs84EdNKVgKgxi3VdG1MUw3IMdDn
+ad0oqQ4wo5yPXLH1fkZ+nLsV1lPD/xiLTZxdSGBqzpj/HncghIeHU1+BuWCSOTw
uQXZaZK548rumRAlTCQH8Df6PRQpAV+QDPTXjnVe5SLnLXSBGCgUDtLNLoi+nOw7
+HS/kr16nfRBU81lauRSdhDRm1mdmLPyVBVUa7H42sWVfa7S85YIlxzci+LKQT5e
qsMz3CxPpZtMYmy9emI513R4h7Fc1u2O6NbaouOtAhcwaoJckQjjTkaOoVrvSsjq
7/PROAm8TinVQJIkkpvt0yHGECjfJEPvsA5QRqZsy0KrB/zhns6osZBUEbTllk4G
58NgZ55BH12H2cc/fdl6Q05SXtpz18U6p3TCaNK+wUEuZosVM/hweYyQNYUkojFM
eIS2EQzf25EesYEAEQEAAf4HAwISHxSql0abhu40NGjolvOjvvPvVEB/TdjGi3ca
6vcRNoadfXUZgF3FlVvF6yp1qiUmSV3/FRFIONQVF0Sv6PpGQKcUF2jpGVnCZTzi
kKZMh45WVnuYKzW7vUYFqwJJWWUEcUEvaXvy2UcAOlRja/RTg0ngI4QfomoyZwK4
23OKINJ8Ix1n03DMAnP8qceaPhn8ryABqsP+/D1Ypw7XkHLS/pSzP8cMWg8ddh2f
+uj1dT3/TuqbYkUqyKp1mJpcvtLVqVmwEKwr9eD9+3fOEJ8DcGw0id8KfVWt+BrP
NP8aSrR4ep29EU+VZh73nCAedPBH61OWWGhWSCAOEsjdH3Cpvj37hLZvs0LEDSuq
akBujwaXrOJjNUXgY8ews7yKRBWQJGC3LVRFKLmblmNDyktQDSsRYgNWGCpV5+yq
UQTwH9xnbZRIXiaTWfjunONqlb4M/6wvDXNQFMc7oqbOcKu+y6pqNZG5nJ7lJCen
wzc2N1Dqv7Y8d9A33L/WB3Lg80UBfQLWOOsPuY1f5se/+twkszaE2iJEnHZw5yTx
KWtBcuKpwzEQE10KzMnB4bLOdDaTU0Itfs5MVVYDARywLVat3O8oEyc/pvA6nixE
pDHxues4GQPN8WGoHlqJHfmWhyYVfAG18bQs/Ruzm/ADa1o6mRlqEefPdix52U3U
jraGuN627M8vfJneVHmX7q+FufQUUiEueuyeO36nm3Cojy7xaWYDWF7cPyoW3zJq
doivruEcexiwL+tmKB0+A/6qpCvMaVjnqoJFc0OWa6AQrpDGTiCkxWCUufhF/a21
ECeIkefRkzmTyxOE2WxJ5Pg3X3LtEwNL85Dv3zHLPkPAbr5qYmFfpv5TmnFaV8Ps
FL9H+34nfkRs43FnU25bfoV0jKkmoomxLgXoImtVrXh4V/rIqAfxiIosFbbQkxnk
ajENDEO0tFExbkp7ku3ZwzrwHTP0wb7ltlT/MRwfg+UUswYqePFzPYCtncGhBHzV
oRAzMSni6gGtO7o1gPeIFVy0KbRrAVwylgseC1XznwUly4Xs0BbjYfmUw8yGodF+
yFzuGLKB84Cvf9o1OvaHNviwz90W0KvCEJOxdLb3SjYnXsrqattOEeEUVr2wVYKz
PkZzFuGiX12i4iPrY0/hbSyD0rzefqJLgNBfF5pqhGaoxHkXVRD1gG41VkZ66Y7q
tY4ojynt8NNyAATw32XDvNj/8NrKzNdtiAVIGhge7gPed8b5HeFB4lUYo/9Cflqk
vCBCzPyOh6uAMFy9KOOWoJPMvCTMhH9z7CRsW6+QvuKXwfx3UN6et/fkzZo6yXkp
sIKOZEGplQ/YG12P5WygkteNI31j0j7zCbQYSm9lIEplbm5lIDxqb2VAamVubmUu
dWs+iQHUBBMBCAA+FiEE6XFSDMHqUsnzz1Hov+KxsA4HiRIFAmKYmNoCGwMFCQPC
ZwAFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQv+KxsA4HiRI/Bgv9E2bXJBYv
o4bk8c30WFedYPiMArUYCdH+mSZIIJYKUlzhYqMFCz2A74A55IXR7PhrHxmFJwDU
/3voChEu7D8h/JEz3/9lFxJHzzxwl7vDOyG2qgRdKj5TMmkV+SFj90yjloA/wmqn
MyWq3fJcG/WK+R5T2Ai37ZxYV9smM6bHdcLw8fk53q00+D8oOLk3mtBi5w2cOw67
kNUf5hRGYXyfq2EEPW9IJoqcZsm0AvwUL5kUk6ZiWJw3Wo0V3JSwZiDLo1pXrmRu
TBrqVf2NhhJxpGx/eTRSfyhud7dbjVLFC625DCzU+eeOLC7sHCPCtloF1AVfoWyd
8jlP9SesMqCpfNHP55q7dBElDWqrHxykU5MbNdT8bjmBk9xMcfuFiH5Z7RUtYccH
WOYcQxfzWjaiE8hCnpUVN9zy8KTDv85i85WYF3tZFN4p7IucmOeyFBNFv7lciZt5
d8JMe/O6jcfXJA7X6NcXcxiRvqyIJrURo+rn+NcAXqsZE/emR+b7LM4snQWGBGKY
mNoBDADhAdkZ+mZnvRjUiJ2W2Q1BBO5pnkqAscElJt6rPgrk8D8s5cY20/0W2YB3
e/PDh7eb6Mn0MgEUq+DC9s4WtfMVwWjksC0O4uzBig+rY6a8kSTR0WtmL7nrEYsd
DBxVMetHAz7YBwaIyhMw2PRGz67GhbKfNRp0IMqBWtxizcPHWempX6CoqkKkfkTH
rgCAHn3dvC8o9XwK2XTaV4f9cgBIKJpCXrbw4ZEKLrSftMdHqvzOVTDPgXLB1b0g
ohvC5eeqs9dWWc/CnAAYN6dFj+GeTKNPtS90g/Os8WXHmvHzo0HclRuRsyPCziKu
Fqgi8F2XSARJA9tWGNcWfJ+reGW0i+xefvfQ0voKLhZ06ufzpMkc/V19Ckp1Xi8I
C8T3lrUeNS4/ReOdynmzFume1PDVCZKhVhivaki80TDZqnKncv5gih2hpDvJbTcI
5ldHvrKdxh9KOsq6F1V4BPO0EPZ4yIqOdQs4qDd/ZYvozsK0S1k3d2l+a3DgyUuu
tjPTlzcAEQEAAf4HAwKiRdfz8PJcHO4g033bEjAaUwgAbrH3Y4PeC/zfiUX9nwlw
htDBSDs5vN3tzPpUWW7LEm1nXJUv/r2nWg73n+4i4AtHEcej4Ubb9Z1lIT8LJDzE
O9YXbwZEJhoR2CkrDid4BON6LGefePD+kolWqN1zGxCUNbLsQ/aapIeKrxE24NSY
BrSp3YdAUoFZb17aQNsmsyKin/NcetY/++PvBUXLfKZ7ZdUL5TWsHN6LiQErhkCz
G4Osxb0FWfivD6UnGPoqCihk1uZ7YJVVa1nT6w6HeAEjine3ZytsmGba4XGOifQt
Bt61WmRbnsWgVbIfNN1lbngHW4K/VTsFKtohRPYgupxCs1ItvMi8DfPSK64nSBB4
LtIi+krRky3VKN5tMkkB0MaC8hTfO8PHsVNcFuIjlalT6b+tcldk9GXHhahMUhL9
1GUc8OsVhnckwWrMA4lXC+S2pHMUH984VNK0G/YPTwlkjJB99h2rvdpWfIARVehz
iumq1XAaLKXsTTFGCv750tj89cC4hVW/qmFwBJjjowsMiUC1k2+scNzpKAy+krNM
7+5G/SlVTATmH6PvZ0Svraub89lzWh3OBS7nzi7GS8I7INAT0o3h7lWakAK7ZDfm
dw8oo0n5sMLFQR/chFRaMUnaXzigV9gq5jjk8BonDCsu1uZQumSSq3LEi1EK28qW
KiU9pnHas6JwS1bR97SQn6Mav2rXGPzfHJgAYvwnXQ5zfuP1DMSesr013r8IcAqX
cPTtoCPkBGP9L9bv1PY9pqf+hSIvaOzB9jxo4UoFfhroz1KfZ+WlF06+N/bdynbU
Q19TKAnqD2To0HB0/nJ7/pq2HiaoA8Mufc/n5HJMs2/2z/H9bCznDPvNKbpSRUdh
XMooArWdENWybAStwOcQGNobigwC7s/dirVhvz1bYWJKTI1vkPuKQ/grBkqkK/7P
9JAmwvyQ1dhI+8xYgisFpbEkKstp/lVkVUiSyY5fbeIbD21J963+kJoKxi8vDKKM
WhouT8WHamAzvjXUqF7vuSri2qT4wi4RFryV48w9HbNIrG4JC+8slIFYt4q6+1pT
O7QVMe5/PfwSMXUvSXCkmUnCWhk4MbhbMYTV1PLP9GqHWWScf66+6sHUKuLzbx53
8OJG2WQvWlbXdCFxKwcFBrjiVSlp1R5JLYs4BPUB694LGQGq10JpHeTl9yltCwLh
vKh0ZoCU7f74md/urqMhvMsXZUKOduLMa3p7v54jg1GNYRrJQDR0JY8OQi9gieNI
OXGFY4rMFVKqO3gXspZIrs+ZCkvg4DEMOgQaHsDQavZm7D2HC3ttxhE1g1pD4pqR
MmIUcsap8jf8MNrAY0XZ0EtnJ4kBvAQYAQgAJhYhBOlxUgzB6lLJ889R6L/isbAO
B4kSBQJimJjaAhsMBQkDwmcAAAoJEL/isbAOB4kS0xAL/jkGbRaEx1KosKnddUTv
RGwT9z3dd2TqDTDUsBe9Nrik822C1oqn3rq/jSGJ3r45erLSCPFKQ++0x0hD8BLN
PTzPb4Nl9OiIytbtZp7a7lotWZ2gRlh5r+TQ0vvcrtnAedOEYuz5wQSXFzWySKI6
TDIdlvdbgkoUblvAwyMee9fslVj5uMfVwN0SH9cT6zqDnVzWrkfQ9vnRrhdFGgjD
ihoswBEH4NbkDwPhf/QvLOtMhj7xx8NPImE1fBRwJfeo5+gHF76dxIcLWZKCTmsU
+SdDOw4i6sqw3LzDIp/yRp+C+wDdxOb257zWvCUXEzYBeSzLFltQpIiJbpOrMBOX
izWcUrImyy8xJ4T2rd+1rDks+dLk1DTefuGlMdMQb6T1v3ojHH/bKFYLeqJMmdeO
DWmKYXaoLCfXEGBUsx/5Xauu414UxCx+uxn7RpoVoXA93BWeOvUZecP6GMcZe4py
XC9qJoZsR46abxHWu6fJ+LX8m/OrQY0KQsKe+liIEuLQ5g==
=QEq0
-----END PGP PRIVATE KEY BLOCK-----`; // encrypted private key
    const passphrase = window.location.hash.slice(1); // what the private key is encrypted with - taken from the anchor link

    const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });

    let privateKey;
    try {
        privateKey = await openpgp.decryptKey({
            privateKey: await openpgp.readPrivateKey({ armoredKey: privateKeyArmored }),
            passphrase
        });
    } catch (e) {
        document.getElementById("decrypted").innerHTML = "...incorrect password...";
        document.getElementById("decrypted").style.background = "#eb9393"
        document.getElementById("encrypted").style.color = "#222"
        return
    }

    const encrypted = document.getElementById("encrypted").innerHTML;

    const message = await openpgp.readMessage({
        armoredMessage: encrypted // parse armored message
    });
    const { data: decrypted, signatures } = await openpgp.decrypt({
        message,
        verificationKeys: publicKey, // optional
        decryptionKeys: privateKey
    });
    document.getElementById("decrypted").innerHTML = decrypted;
    document.getElementById("decrypted").style.background = "#93eb93"
})();
